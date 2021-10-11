import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <section>
        <form>
          <div>
            <label htmlFor="name-input">
              Nome
              <input
                type="text"
                name="name-input"
                id="name-input"
                data-testid="name-input"
              />
            </label>
          </div>
        </form>
      </section>
    );
  }
}

export default Form;