import  InMemoryStrategy from '../lib/PersistenceStrategy/InMemoryStrategy';
import persistenceStrategySpec from './PersistenceStrategySpec';

var strategies = [
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