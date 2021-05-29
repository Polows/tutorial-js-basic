// Object this

var obj = {
    foo: function () {
        return 'foo'
    },
    bar: function () {
        var that = this;
        document.addEventListener('click', function (event) {
            that.foo()
        })
    }
}

var obj2 = {
    foo: function () {
        return 'foo'
    },
    bar: function () {
        document.addEventListener('click', function (event) {
            this.foo()
        }).bind(this)
    }
}

// EM6
var obj3 = {
    foo: function () {
        return 'foo'
    },
    bar: function () {
        document.addEventListener('click', event => this.foo()) 
    }
}