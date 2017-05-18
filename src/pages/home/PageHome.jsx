import { Component, LogicRender } from 'refast';
import { withRouter } from 'react-router';
import SearchWord from 'components/search-word';
import SearchData from 'components/search-data';
import './PageHome.less';
import logic from './logic';

class PageHome extends Component {

  constructor(props) {
    super(props, logic);
    this.handleChange = this.handleChange.bind(this);
    this.updateAndSearch = this.updateAndSearch.bind(this);
  }

  handleChange(e) {
    this.updateAndSearch({ workNo: e.target.value });
  }

  updateAndSearch(val) {
    this.execute(['updateState', 'search'], val);
  }

  render() {
    const { state: { data, workNo, empty, loading }, handleChange } = this;
    return (
      <div className="page-home">
        <input
          className="kuma-input"
          onChange={handleChange}
          placeholder="请输入员工工号"
          value={workNo}
        />
        <SearchWord workNo={workNo} />
        <LogicRender empty={empty} loading={loading}>
          <SearchData data={data} />
        </LogicRender>
      </div>
    );
  }
}


export default withRouter(PageHome);

