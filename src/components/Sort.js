import React from "react";

class Sort extends React.Component {
  // state = {
  //   itemChecked: { t: true }
  // };

  // handleSort = e => {
  //   e.preventDefault();
  //   const { handleSort } = this.props;
  //   let itemChecked = this.state.itemChecked;
  //   itemChecked[e.target.id] = e.target.checked;
  //   //itemChecked = itemChecked.filter(key => key !== e.target.id);
  //   this.setState({ itemChecked });
  //   handleSort(e, this.state.itemChecked);
  // };

  render() {
    const { handleSort } = this.props;
    return (
      <div className="sort">
        <input
          type="radio"
          id="t"
          name="sort"
          onChange={e => handleSort(this, e)}
        />
        <label htmlFor="t">Trendiness</label>
        <input
          type="radio"
          id="r"
          name="sort"
          onChange={e => handleSort(this, e)}
        />
        <label htmlFor="r">Rating</label>
      </div>
    );
  }
}

export default Sort;
