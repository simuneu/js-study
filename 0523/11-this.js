var obj = {
  outer:function(){
    console.log(this)
    var innerFunc=()=>{
      console.log(this)
    }
    innerFunc()
  },
} 

obj.outer()

var obj = {
  outer: function(){
    console.log('outer'+this)
    var innerFunc=()=>{
      console.log('inner'+this);
    };
    innerFunc();
  },
}

obj.outer();