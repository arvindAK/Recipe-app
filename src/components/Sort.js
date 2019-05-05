import React from "react";

class Sort extends React.Component {
  render() {
    const { handleSort } = this.props;
    return (
      <div className="sort input-group">
        <div className="input-group-prepend">
          <input
            type="radio"
            id="t"
            name="sort"
            defaultChecked
            onChange={e => handleSort(e)}
          />
          <label htmlFor="t">Trendiness</label>
        </div>

        <input type="radio" id="r" name="sort" onChange={e => handleSort(e)} />
        <label htmlFor="r">Rating</label>
      </div>
    );
  }
}

export default Sort;
