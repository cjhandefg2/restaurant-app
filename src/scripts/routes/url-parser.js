const UrlParser = {
     parseActiveUrlWithoutCombiner() {
       const url = window.location.hash.slice(1).toLowerCase();
       const splitedUrl = this._urlSplitter(url);
       console.log('Split URL:', splitedUrl); // Debug URL split
       return splitedUrl;
     },
   
     _urlSplitter(url) {
       const urlsSplits = url.split('/');
       return {
         resource: urlsSplits[1] || null,
         id: urlsSplits[2] || null,
         verb: urlsSplits[3] || null,
       };
     }
   };
   
   export default UrlParser;