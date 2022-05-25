
class BaseText extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.textColor,
            fontFamily: "Arial",
            fontSize: this.props.textSize
        };
    }
    
    render() {
        return <p style={this.state}>{this.props.text}</p>;
    }
}

class DarkText extends React.Component {
    render() {
        return <p style={styles.BlackText}>{this.props.text}</p>
    }
}

class HeaderText extends React.Component {
    render() {
        return <h1 style={styles.MainHeader}>{this.props.text}</h1>;
    }
}

class TopBar extends React.Component {
    render() {
        return( <div style={styles.TopBarStyle}>{this.props.children}</div>
              );
    }
}

class Background extends React.Component {
    render() {
        return (
            <img style={styles.BackgroundImage} src='./bg.jpg'/>
        );
    }
}
               
class SelectorComponent extends React.Component {
    render() {
        const listItems = this.props.items.map((item) => 
                                                  <option value={item}>{item}</option>
                                              );
        return(
            <select style={styles.Selector} defaultValue={this.props.descriptionText}>
            <option selected disabled hidden>{this.props.descriptionText}</option>
            {listItems}</select>
        );
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
                fontFamily: "Arial",
                fontSize: "17px",
                padding: "10px 25px",
                textDecoration: "none",
                textAlign: "center",
                color: ColorScheme.textColor,
                backgroundColor: ColorScheme.secondaryColor,
                boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.5)",
                cursor: "pointer"
        }
        if(this.props.type !== undefined) {
            if(this.props.type == "positive") {
                this.state.backgroundColor = styles.ColorScheme.positiveButtonColor;
            }
            else if(this.props.type == "negative") {
                this.state.backgroundColor = styles.ColorScheme.negativeButtonColor;
            }
        }
    }

    handleClick() {
        this.props.onClick();
    }
    
    render() {
        return(
            <a onClick={this.handleClick} style={this.state}>{this.props.text}</a>
        );
    }
}

class TextButton extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.onClick();
    }
    
    render() {
        return(
            <a onClick={this.handleClick} style={styles.TextButtonStyle}>{this.props.text}</a>
        );
    }
    
}

class Dialog extends React.Component {
        
    render() {

        return(
            <div className={this.props.show ? "dialog-visible" : "dialog-hidden"}>
                <div style={styles.DialogStyle}>{this.props.children}</div>
            </div>
        );
    }
}

class TextField extends React.Component {
    render() {
        return(
            <input type={this.props.inputType} placeholder={this.props.tip} style={styles.TextFieldStyle}/>
        );
    }
}

class ContentContainer extends React.Component {
    render() {
        return(
            <div style={styles.ContentContainerStyle}>{this.props.children}</div>
        );
    }
}

class TextContentContainer extends React.Component {
    render() {
        return(
            <div style={styles.TextContentContainerStyle}>{this.props.children}</div>
        );
    }
}

class Card extends React.Component {
    render() {
        return(
            <div style={styles.CardStyle}>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

class Order extends React.Component {
    render() {
        let area = categories.AvailableCities[this.props.order.alue];
        let job = categories.JobCategories[this.props.order.palvelu];
        let etunimi = this.props.order.asiakas.etunimi;
        let sukunimi = this.props.order.asiakas.sukunimi;
        let hinta = this.props.order.hinta;
        return(
            <TextContentContainer>
            <Divider/>
            <div style={styles.OrderStyle}>
                <BaseText text={"Työ: " + job} textColor={styles.ColorScheme.textColorDark} textSize="17px"/>
                <BaseText text={"Alue: " + area} textColor={styles.ColorScheme.textColorDark} textSize="17px"/>
                <BaseText text={"Asiakas: " + etunimi + " " + sukunimi} textColor={styles.ColorScheme.textColorDark} textSize="17px"/>
                <BaseText text={"Tarjottu hinta: " + hinta + "€"} textColor={styles.ColorScheme.textColorDark} textSize="17px"/>
                <div style={styles.HorizontalContentContainer}>
                    <Button text="Hyväksy" type='positive'/>
                    <Button text="Hylkää" type='negative'/>
                </div>
            </div>
            </TextContentContainer>
        );
    }
}

class Divider extends React.Component {
    render() {
        return(
            <div style={styles.DividerStyle}></div>
        );
    }
}