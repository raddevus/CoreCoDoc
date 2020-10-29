// Journal is a "document" which is a collection collection of Entry which has an owner (user)
// tied by the ownerId which is equal to user.Id
class Journal{
    constructor(item){
        // publicId can be used for read-only access of your report (list of entries)
        this.publicId = item.publicId;
        // ownerId is user.Id
        this.ownerId = item.ownerId;
        this.created = new Date();
        // array of entry items
        this.entries = item.entries;
    }
    toString(){
        return this.publicId;
    }
}