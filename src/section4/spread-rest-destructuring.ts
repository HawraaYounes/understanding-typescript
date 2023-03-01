//Video 52: The Spread Operator(...)
    const hobbies=['Sports','Swiming'];
    const activities=['Hiking'];
    //activities.push(hobbies); //Error: Can't pass array to push, only strings are allowed;
    activities.push(...hobbies); //Correct, pushing list of strings using spread operator(...)
    console.log(activities); //['Hiking', 'Sports', 'Swiming']

//Video 53: Rest Parameters
    function getAverage(...args: number[]) { //Rest Param is passed to getAverage
    const avg = args.reduce(function (a, b) {
        return a + b;
    }, 0) / args.length;
    return avg;
    }
    console.log(`Average of the given numbers is: ${getAverage(10, 20, 30, 40, 50)}`); //Average of the given numbers is: 30

//Video 54:Destructuring Arrays & Objects
    const [x,, y, ...remainingValues] = [10, 20, 30, 40, 50];//Destructuring Array
    console.log(x); // 10
    console.log(y); // 30 ",," in destructuring means that the element is skipped
    console.log(remainingValues); // [40, 50]

    const {a, b, ...restof} = {a: 10, b: 20, c: 30, d: 40};//Destructuring Object
    console.log(a); // 10
    console.log(b); // 20
    console.log(restof); // {m: 30, n: 40}

    let obj = { //Destructuring Object
    firstName: "GFG",
    add : {
        country: "India",
        state : {
            code : "JS",
            pincode:"820800",
            article:{
            topic : "destructuring"
            }
        }
    }
    }
    let {firstName} = obj;
    console.log(firstName) //GFG
    let {add:{country:abcd}} = obj
    console.log(abcd)//India
    let {add:{state:{code:cd}}} = obj
    console.log(cd) //JS
    let {add:{state:{article:{topic:ef}}}} = obj
    console.log(ef); //destructuring