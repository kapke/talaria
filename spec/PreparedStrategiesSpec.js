var InMemoryStrategy = require('../lib/PersistenceStrategy/InMemoryStrategy'),
    persistenceStrategySpec = require('./PersistenceStrategySpec');

var strategies = [
    //{
    //    name: "Null strategy",
    //    factory: function () {
    //        return null;
    //    }
    //}
    {
        name: 'In memory',
        factory: function () {
            return new InMemoryStrategy();
        }
    }
];

strategies.forEach(function (strategy) {
    persistenceStrategySpec(strategy.name, strategy.factory);
});