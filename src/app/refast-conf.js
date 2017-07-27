import Refast, { LogicRender } from 'refast';
import { Message, Dialog, EmptyData } from 'uxcore';
import DB from './db';

// 这里使用 use 来配置 Refast
Refast.use('fn', {
  message: Message,
  dialog: Dialog,
  DB,
});

const Loading = () => <div className="kuma-loading" />;
const Empty = EmptyData || (() => <div>暂无数据</div>);

// 修改 LogicRender 增加默认配置
// 用来自定义Loading和Empty的样式
Object.assign(LogicRender.defaultProps, { Empty, Loading });
