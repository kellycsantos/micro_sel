'use client'
import { useUser } from "@/app/stores/store";

export default function Home() {

const {user, age} = useUser((state) => state)

  function addNewUser(name : string){
   useUser.getState().addUser(name)
  }

  return (
    <div>
      <main>
        MicroSEL
        <p>Ödeme başariyla gerçekleşti.
          Teşekkür Ederiz</p>
        
          Name : {user}, {age}
          <button onClick={() => addNewUser('Kelly')}>Add user</button>
      </main>
    </div>
  );
}
