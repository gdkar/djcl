#! /usr/bin/env python
from __future__ import print_function
import lxml.html as html, requests as reqs, sys, os, os.path as pth, urlparse

seen_url    = set(            )
init_url    = urlparse.urlparse(sys.argv[1])
next_url    = set([init_url])
content     =   {             }
current_dir = os.getcwd()
target_dir  = os.getcwd()+'/'+sys.argv[2]

def descend(path):
    stack = []
    while not pth.exists(path) and path:
        stack.append(pth.basename(path))
        path = pth.dirname(path)
    while stack:
        path = pth.join(path,stack[-1])
        os.mkdir( path )
        stack.pop()

while next_url:
    cur_url  = next_url.pop()
    req      = reqs.get(cur_url.geturl())
    seen_url.update([cur_url])
    _url     = target_dir+cur_url.path
    if _url.endswith('/'):
        _url = _url[:-1]+'.list'
    print ( _url )

    descend(pth.dirname(_url))
    os.chdir(pth.dirname(_url))
    f = open(pth.basename(_url),'w')
    f.write(req.content)
    f.close()
#    content [cur_url.path ] = req.content
#    _file = open (pth.join(target_dir,cur_url.path.replace(r'/','_')+'.file'),'wb+')
#    _file.write(req.content)
    #_file.close()
    #print ( req.url, cur_url.path, __import__('pprint').pprint(req.headers) )
    if req.headers['content-type'].startswith('text/html;'):
        try:
            par = html.fromstring(req.content,req.url)
            par.make_links_absolute()
            new_urls =  [urlparse.urlparse(x.attrib['href']) for x in par.xpath('//a') ]
            new_urls =  set( filter( lambda x: x.netloc == init_url.netloc and x.path.startswith(init_url.path),new_urls))
            new_urls.difference_update( seen_url )
#            print ( cur_url.path +':')
#            print ( '\t'.join(map(lambda x: x.path,new_urls)))
            next_url.update(new_urls)
        except:
            pass
os.chdir(current_dir)
