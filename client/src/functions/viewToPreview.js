export const viewToPreview = (s)=> {
    s = s.substr(0,s.length-17)
    s+="preview"
    return s;
}