let SqlBase = require('./SqlBase');
class Answer_D extends SqlBase {
    constructor() {
        super();
    }
    select(callback) {
        //编写sql语句
        let sql = "select * from questionsd";
        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }
    selectById(id, callback) {
        //编写sql语句
        let title = `select * from questionsd where id=${id}`;
        //查询数据
        this.connection.query(title, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }
}

module.exports = Answer_D;