export interface Products{
    _id:string,
    name:string,
    _type:"products",
    price:number,
    description?:string,
    image?:{
        asset:{
            _ref:string,
            _type:"image"
        }
    },
    category:string,
    discountPercent:number,
    new:boolean,
    colors:string[],
    sizes:string[],
        
    slug:{
        _type : "slug"
        current : string;
    }
    }