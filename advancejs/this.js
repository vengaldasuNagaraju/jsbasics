
// Using this :

// this inside setname refers to the global object, not c.
// c.name does not update in setname.


var c={
  name:'the c object',
  log:function(){
    this.name='updated c object';
    console.log(this);

    var setname =function(newname){
      this.name=newname;
    }
    setname('updated again the c object');
    console.log(this);
  }
}
c.log();

// Using self :

// self is assigned this (c), so changes persist.
// Works correctly inside nested functions.
//setname is called, and since it modifies self.name, which is still referencing c, the update is successful.

var c={
  name:'the c object',
  log:function(){
    var self =this;
    self.name='updated c object';
    console.log(self);

    var setname =function(newname){
      self.name=newname;
    }
    setname('updated again the c object');
    console.log(self);
  }
}
c.log();