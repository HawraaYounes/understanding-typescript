//Video 83: Intersection Types
    type LeftType = {
        id: number
        left: string
      } 
      type RightType = {
        id: number
        right: string
      }
      
      type IntersectionType = LeftType & RightType //createing a new type by combining leftType & rightType.
      function showType(args: IntersectionType) {
       console.log(args);
      }

      showType({ id: 1, left: "test", right: "test" }) // Output: {id: 1, left: "test", right: "test"}
//Video 84: More on Type Guards
      //'typeof' type guard
      type alphanumeric=string | number;
      function addNumbers(a:alphanumeric,b:alphanumeric){
        if(typeof a==='number' && typeof b==='number'){
          return a+b;
        }
        if(typeof a==='string' && typeof b==='string'){
          return a.concat(b);
        }
        throw new Error('Invalid arguments! Both arguments must be either numbers or strings.')
      }
      console.log(addNumbers('Hello ','World!')); //Hello World!
      console.log(addNumbers(10,15)); //25
      //console.log(addNumbers('Hello ',25));//Error:Invalid arguments! Both arguments must be either numbers or strings.

       //'instanceof' type guard
       class Customer {
        creditAllowed(): string {
            return 'I am  a Customer.';
        }
    }
    
    class Supplier {
        inShortList():string {
            return 'I am a supplier.';
        }
    }
    type BusinessPartner = Customer | Supplier;
    function signContract(partner: BusinessPartner) : string {
        let message: string;
        if (partner instanceof Customer) {
            return message = partner.creditAllowed();
        }
    
        if (partner instanceof Supplier) {
            return message = partner.inShortList();
        }
        throw new Error('Invalid argument! Argument should be Customer or Supplier')
    }
    const newPartner=new Supplier();
    console.log(signContract(newPartner));
    
    //'in' type gurard
    type Padding = LeftType | RightType;
    function printPaddingInformation(padding: Padding) {
      if ('left' in padding) {
        console.log('Padding to the Left: ' + padding.left);
      }
      if ('right' in padding) {
        console.log('Padding to the Right: ' + padding.right);
      }
    }
    printPaddingInformation({ id: 634, right: '70%' });

    
