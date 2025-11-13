import { Component } from "react";
import sandaly from "./assets/sandals.png"
import klapki from "./assets/klapki.png"
import drewniaki from "./assets/drewniaki.png"
import japonki from "./assets/japonki.jpg"
import rzymianki from "./assets/rzymianki.jpg"
import kozaki from "./assets/Kozaki.png"
import trapery from "./assets/trapery.png"
import ItemCard from "./Components/ItemCard/ItemCard";
import ItemCategory from "./Components/ItemCategory";

export default class ItemBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, name: "Sandaly", count: 15, image: sandaly },
                { id: 2, name: "Klapki", count: 0, image: klapki },
                { id: 3, name: "Drewniaki", count: 30, image: drewniaki }
            ],
            winterItems: []
        }
    }

    addSummerShoes = () => {
        this.setState(prevState => 
            {
                const nextId = prevState.items.length + 1;
                const summerShoes = [
                    ...prevState.items,
                    { id: nextId, name: "Japonki", count: 0, image: japonki },
                    { id: nextId + 1, name: "Rzymianki", count: 68, image: rzymianki }
                ]

                return { items: summerShoes }
            }
        )
    }
    
    
    addWinterBoots = () => {
        this.setState(prevState => {
            const currentId = prevState.items.length + prevState.winterItems.length
            const nextId = currentId + 1

            const newWinter = [
                ...prevState.winterItems,
                { id: nextId, name: 'Kozaki', count: 12, image: kozaki },
                { id: nextId + 1, name: 'Trapery', count: 5, image: trapery }
            ]

            return { winterItems: newWinter }
        })
    }
    
    handleCountChange = (id, newCount) => {
        this.setState(prevState => ({
            items: prevState.items.map(item => (item.id === id ? { ...item, count: newCount } : item)),
            
            winterItems: prevState.winterItems.map(item => (item.id === id ? { ...item, count: newCount } : item))
        }))
    }

    removeSoldOut = () => {
        this.setState(prevState => ({
            items: prevState.items.filter(item => item.count > 0),
            winterItems: prevState.winterItems.filter(item => item.count > 0)
        }))
    }


    render() {
        let winterSection = null;
        if (this.state.winterItems.length > 0) {
            winterSection = (
                <div>
                    <ItemCategory category="zimowe" />
                    {this.state.winterItems.map(item => (
                        <ItemCard
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            count={item.count}
                            onCountChange={this.handleCountChange}
                        />
                    ))}
                </div>
            );
        }
        return (
            <div>
                <h2 className="oferta">Nasza oferta</h2>
                <button onClick={this.addSummerShoes}>Przyjmij obuwie letnie</button>
                <button onClick={this.addWinterBoots}>Przyjmij obuwie zimowe</button>
                <button onClick={this.removeSoldOut}>Usun wyprzedane</button>

                <ItemCategory category="letnie" />
                {this.state.items.map(item => (
                    <ItemCard
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        count={item.count}
                        onCountChange={this.handleCountChange}
                    />
                ))}
                {winterSection}
            </div>
        )
    }
}
