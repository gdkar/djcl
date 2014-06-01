type url = {protocol: string; domain_name: string; query_path: string; query_string: (string * string) list}

let parse_url u =
 {protocol="http"; domain_name=""; query_path = ""; query_string = []}
