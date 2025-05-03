const style = {
    theme : {
        border: 'solid',
        color: 'red',
        paddingLeft: 650,
        paddingRight: 656,
        paddingTop: 25,
        paddingBottom: 25
    }
}
function Head() {
    return (
      <div>
        <button style={style.theme}>Header</button>
      </div>
    );
  }

  export default function Header() {
    return (
      <section>
        <Head />
      </section>
    );
  }
  