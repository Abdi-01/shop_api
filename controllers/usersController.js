const db = require('../database')

getUpdate = (req, res) => {
    let sqlGet = `Select * from tb_users;`

    db.query(sqlGet, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        }
        console.log(results)
        res.send(results)
    })
}

module.exports = ({
    getData: (req, res) => {
        // Menuliskan variable query
        let sqlGet = `Select * from tb_users;`

        db.query(sqlGet, (err, results) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            }
            console.log(results)
            res.status(200).send(results)
        })
    },
    addUser: (req, res) => {
        console.log(req.body)

        let { username, email, password, role, note, usia } = req.body

        let sqlInsert = `Insert Into tb_users (username,password,email,role,note,usia) 
        values (${db.escape(username)},${db.escape(password)},${db.escape(email)},${db.escape(role)},${db.escape(note)},${db.escape(usia)});`
        console.log(sqlInsert)

        let sqlGet = 'Select * from tb_users;'

        db.query(sqlInsert, (err, results) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            }
            console.log(results)

            db.query(sqlGet, (errGet, resultsGet) => {
                if (errGet) {
                    console.log(errGet)
                    res.status(500).send(errGet)
                }
                res.status(200).send(resultsGet)
            })
        })
    }
})