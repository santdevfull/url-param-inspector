export const metadata = {"slug": "url-param-inspector", "title": "URL Param Inspector", "description": "Inspect a web address and its query parameters."};
export const fields = [{"name": "url", "label": "URL", "value": "https://example.com/search?q=code&page=2"}];
export function compute(input){
  const u=new URL(input.url);return {origin:u.origin,path:u.pathname,params:Object.fromEntries(u.searchParams.entries()),secure:u.protocol==='https:'}
}
