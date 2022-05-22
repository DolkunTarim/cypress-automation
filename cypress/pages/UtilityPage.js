class UtilityPage{
    constructor()
{

}
getLocalTime() {
    var now = new Date();
       var dateStr = now.toISOString().replaceAll(':','-').replaceAll('.','-').
       replace('T','-').replace('Z','');
        return dateStr;
    }
}
export default UtilityPage

