define(["require", "exports"], function (require, exports) {
    var Repository = (function () {
        function Repository(entityInfo) {
            this.entities = [];
            this.entityInfo = entityInfo;
        }
        Repository.prototype.add = function (obj) {
            if (!this.has(obj)) {
                this.entities.push(obj);
            }
        };
        Repository.prototype.remove = function (obj) {
            if (this.has(obj)) {
                this.entities.splice(this.entities.indexOf(obj), 1);
            }
        };
        Repository.prototype.findOne = function () {
            throw new Error('Not implemented yet');
        };
        Repository.prototype.findAll = function () {
            return this.entities;
        };
        Repository.prototype.has = function (obj) {
            return (this.entities.indexOf(obj) > -1);
        };
        return Repository;
    })();
    return Repository;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcG9zaXRvcnkudHMiXSwibmFtZXMiOlsiUmVwb3NpdG9yeSIsIlJlcG9zaXRvcnkuY29uc3RydWN0b3IiLCJSZXBvc2l0b3J5LmFkZCIsIlJlcG9zaXRvcnkucmVtb3ZlIiwiUmVwb3NpdG9yeS5maW5kT25lIiwiUmVwb3NpdG9yeS5maW5kQWxsIiwiUmVwb3NpdG9yeS5oYXMiXSwibWFwcGluZ3MiOiI7SUFFQSxJQUFNLFVBQVU7UUFJZkEsU0FKS0EsVUFBVUEsQ0FJRkEsVUFBcUJBO1lBRnZCQyxhQUFRQSxHQUFPQSxFQUFFQSxDQUFDQTtZQUd0QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7UUFDcENBLENBQUNBO1FBQ01ELHdCQUFHQSxHQUFWQSxVQUFXQSxHQUFNQTtZQUNWRSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDaEJBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQzVCQSxDQUFDQTtRQUNMQSxDQUFDQTtRQUNHRiwyQkFBTUEsR0FBYkEsVUFBY0EsR0FBT0E7WUFDZEcsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2ZBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hEQSxDQUFDQTtRQUNMQSxDQUFDQTtRQUNHSCw0QkFBT0EsR0FBZEE7WUFDT0ksTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0EscUJBQXFCQSxDQUFDQSxDQUFDQTtRQUMzQ0EsQ0FBQ0E7UUFDTUosNEJBQU9BLEdBQWRBO1lBQ0lLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO1FBQ3pCQSxDQUFDQTtRQUNHTCx3QkFBR0EsR0FBVkEsVUFBV0EsR0FBTUE7WUFDVk0sTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDN0NBLENBQUNBO1FBQ0xOLGlCQUFDQTtJQUFEQSxDQTFCQSxBQTBCQ0EsSUFBQTtJQUVELEFBQW9CLE9BQVgsVUFBVSxDQUFDIiwiZmlsZSI6IlJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2Fwa2UvcHJvamVjdHMvdGFsYXJpYS8iLCJzb3VyY2VzQ29udGVudCI6W119