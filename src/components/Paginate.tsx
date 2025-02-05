import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"



export function Paginate ({
totalItems,
itemsPerPage,
currentPage,
setCurrentPage
}:{
totalItems:number;
itemsPerPage:number
currentPage:number
setCurrentPage:any
}) {

let page=[]
for(let i =1;i<=Math.ceil(totalItems/itemsPerPage);i++){
  page.push(i)
}
const handlePrevPage =()=>{
  if(currentPage>1){
    setCurrentPage(currentPage - 1)
  }
}



const handleNextPage =()=>{
  if(currentPage<page.length){
    setCurrentPage(currentPage + 1)
  }
}


return (
  <div className="mt-8 font-Satoshi px-5">
    <Pagination>
<PaginationContent>
  <PaginationItem>
<PaginationPrevious className="cursor-pointer " onClick={()=> handlePrevPage()}/>
  </PaginationItem>
  {page.map((page,idx)=>(
    <PaginationItem
    key={idx}
    className={currentPage==page?"bg-neutral-200 rounded-md":""}
    ><PaginationLink>
      {page}
    </PaginationLink>

    </PaginationItem>
  ))}
  <PaginationItem>
<PaginationNext className="cursor-pointer" onClick={()=> handleNextPage()}/>
  </PaginationItem>
</PaginationContent>
</Pagination>

  </div>
)
}


