module.exports=function mult(...args) {
    return args.reduce((num, tot) => tot * num);
  }