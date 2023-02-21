export const prettify = (num:number):string => {
    let n = num.toString();
    let separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
}

