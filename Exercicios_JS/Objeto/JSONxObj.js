const obj = {
    a:1,
    b:2,
    c:3,
    soma(){
        return this.a+this.b+this.c;
    }
}

console.log(JSON.stringify(obj));

//console.log(JSON.parse("{'a':1,'b':2,'c':3}""));
console.log(JSON.parse('{"a":1,"b":2,"c":3}'));
console.log(JSON.parse('{"a":1, "b":"string", "c":true, "d":{"nome":"Lucas","idade":18}, "e":[1,"s"]}'));