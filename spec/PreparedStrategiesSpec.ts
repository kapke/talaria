import InMemoryStrategy from '../lib/PersistenceStrategy/InMemoryStrategy';
import InMemoryOnPointersStrategy from '../lib/PersistenceStrategy/InMemoryOnPointersStrategy';
import persistenceStrategySpec from './PersistenceStrategySpec';

var strategies = [
    {
        name: 'In memory',
        factory: function () {
            return new InMemoryStrategy();
        },
        onPointers: false
    }, {
        name: 'In memory with pointers',
        factory: function () {
            return new InMemoryOnPointersStrategy();
        },
        onPointers: true
    }
];

strategies.forEach(function (strategy) {
    persistenceStrategySpec(strategy.name, strategy.factory, strategy.onPointers);
});