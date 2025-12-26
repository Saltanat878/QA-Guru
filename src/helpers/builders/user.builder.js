
import { faker } from "@faker-js/faker";
export class UserBuilder {
   
    withEmail(email) {
        
        this.email = email ?? faker.internet.email({provider: 'qa.guru' })
        return this;

    }
    withName(name){

        this.name = name ?? faker.person.fullName(); // 'Allen Brown'
        return this;

    }

    withPassword(length=10){

        this.password = faker.internet.password({ length:length });
        return this;

    }
    build()
    {
       return {
            email: this.email,
            name: this.name,
            password: this.password,
        };

    }
    
}





/*
import { faker } from '@faker-js/faker';


const user = {
    email: faker.internet.email({provider: 'qa.guru' }),
    name: faker.person.fullName(), // 'Allen Brown'
    password: faker.internet.password({ length: 10 }),
    method() {}
} */
//const UserBuilder = new UserBuilder();
//console.log(UserBuilder.withEmail());