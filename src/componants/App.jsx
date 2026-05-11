import React from "react";
import Card from "./Card";
import dishes from "../dishes";

function App() {
  return (
    <div class="card-container">
      <Card
        Dish={dishes[0].dish}
        Items={dishes[0].items}
        Price={dishes[0].price}
        photo={dishes[0].photo}
      />
      <Card
        Dish={dishes[1].dish}
        Items={dishes[1].items}
        Price={dishes[1].price}
        photo={dishes[1].photo}
      />
      <Card
        Dish={dishes[2].dish}
        Items={dishes[2].items}
        Price={dishes[2].price}
        photo={dishes[2].photo}
      />
      <Card
        Dish={dishes[3].dish}
        Items={dishes[3].items}
        Price={dishes[3].price}
        photo={dishes[3].photo}
      />
      <Card
        Dish={dishes[4].dish}
        Items={dishes[4].items}
        Price={dishes[4].price}
        photo={dishes[4].photo}
      />
      <Card
        Dish={dishes[5].dish}
        Items={dishes[5].items}
        Price={dishes[5].price}
        photo={dishes[5].photo}
      />
    </div>
  );
}

export default App;
