export default {
  defaults() {
    return {
      empty: true,
      loading: false,
      workNo: '',
    };
  },
  // fn 上挂在了在app.js中定义的 dialog 和 message、DB
  // 还有 setState/getState/getProps 三个方法
  updateState(ctx, data) {
    ctx.setState(data);
    // 如果返回 false，就不会执行下面的了
    // return false;
    return data;
  },

  // 前面的参数fromExec是从 dispatch 的时候传过来的
  // 如果updateState有返回值
  // 则后面参数就是从fromUpdateState传过来的
  async search(ctx, fromExec = {}, fromUpdateState) {
    const { setState, fn: { message, DB } } = ctx;

    setState({ loading: true });
    let state = {};

    try {
      const users = await DB.User.query(fromUpdateState);

      const empty = !users.data.length;

      if (empty) {
        message.info(`${fromExec.workNo}查无数据！`);
      } else {
        message.success(`${fromExec.workNo}请求成功！`);
      }

      state = Object.assign(users, { empty });
    } catch (e) {
      message.error(`${fromExec.workNo}请求出错啦！`);
      state = { users: [], empty: false };
    }

    setState(Object.assign(state, { loading: false }));
  },
};
