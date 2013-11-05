function Category (name){
	this.cid = "";
	this.cname = name;
	this.subcategory = new Array();
}

Category.prototype.setSubCategory = function(subcategory){
	this.subcategory.push(new Category(subcategory));
};

Category.prototype.getSubCategory = function(pos){
	return this.subcategory[pos];
	/*
	 * for (e in this.subcategory) {
    if (e.cname.localeCompare(name) == 0) {
     	return e;   
    }
	 */
};

Category.prototype.showSubCategory = function(pos){
	return JSON.stringify(this.subcategory[pos]);
};