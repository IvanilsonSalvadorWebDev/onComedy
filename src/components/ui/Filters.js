export function Filters(){

return `<div class='filters'>
                <select class='select-grid' id='orderByData'><option>Por Data:</option></select>
                <select class='select-grid' id ='orderByPrice'><option value='PorPrice:'>Por Price:</option></select>
                <select id='selectOrderBy' class='select-grid'>
                <option>Order:</option>
                <option data-id='A-Z'>A-Z</option>
                <option data-id='Z-A'>Z-A</option>
                </select>
    </div>
`

}        
