const style = {
    theme : {
        border: 'solid',
        color: 'red',
        paddingLeft: 650,
        paddingRight: 660,
        paddingTop: 25,
        paddingBottom: 25
    }
}
function Foot() {
    return (
      <div>
        <button style={style.theme}>Footer</button>
      </div>
    );
  }

  export default function Footer() {
    return (
      <section>
        <Foot />
      </section>
    );
  }
  