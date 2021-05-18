

export interface Users{
        id: number;
        email: string;
        name: string;
        profilePic: string;
        address: {
          street: string;
          suite: string;
          city: string;
          zipcode: string;
        },
        profession:string;
        phone: string;
}