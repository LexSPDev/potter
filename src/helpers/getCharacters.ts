
export const getCharacters = ( ) => {
    const customFetch = (endpoint:string, options:any) => {
        const defaultHeader = {
          accept: "application/json",
        };
    
        const controller = new AbortController();
        options.signal = controller.signal;
    
        options.method = options.method || "GET";
        options.headers = options.headers
          ? { ...defaultHeader, ...options.headers }
          : defaultHeader;
    
        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;
    
        setTimeout(() => controller.abort(), 3000);
    
        return fetch(endpoint, options)
          .then((res) =>
            res.ok
              ? res.json()
              : Promise.reject({
                  err: true,
                  status: res.status || "00",
                  statusText: res.statusText || "Ocurrió un error",
                })
          )
          .catch((err) => err);
      };
    const get = (url:string, options = {}) => customFetch(url, options);

    const post = (url:string, options: any) => {
        options.method = "POST";
        return customFetch(url, options);
    }

    return { get, post}
}
