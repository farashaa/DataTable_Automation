
class Datatable{
 
get Age(){
    return $$("//td[4]");
}
get show(){
    return $("//select[@name='example_length']")
}

}
export default new Datatable()