import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стілець сірий",
          img: "chair-grey.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "chairs",
          count: 1,
          price: "49.99",
          priceTotal: "49.99",
        },
        {
          id: 2,
          title: "Стіл",
          img: "table.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "tables",
          count: 1,
          price: "149.00",
          priceTotal: "149.00",
        },
        {
          id: 3,
          title: "Диван",
          img: "sofa.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "sofa",
          count: 1,
          price: "319.00",
          priceTotal: "319.00",
        },
        {
          id: 4,
          title: "Лампа",
          img: "lamp.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "light",
          count: 1,
          price: "89.99",
          priceTotal: "89.99",
        },
        {
          id: 5,
          title: "Стілець білий",
          img: "chair-white.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "chairs",
          count: 1,
          price: "59.99",
          priceTotal: "59.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
