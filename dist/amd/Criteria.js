define(["require", "exports"], function (require, exports) {
    var Criteria = (function () {
        function Criteria() {
        }
        Criteria.prototype.equal = function (field, value) { throw "Not implemented"; };
        Criteria.prototype.notEqual = function (field, value) { throw "Not implemented"; };
        Criteria.prototype.greater = function (field, value) { throw "Not implemented"; };
        Criteria.prototype.less = function (field, value) { throw "Not implemented"; };
        return Criteria;
    })();
    exports.default = Criteria;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNyaXRlcmlhLnRzIl0sIm5hbWVzIjpbIkNyaXRlcmlhIiwiQ3JpdGVyaWEuY29uc3RydWN0b3IiLCJDcml0ZXJpYS5lcXVhbCIsIkNyaXRlcmlhLm5vdEVxdWFsIiwiQ3JpdGVyaWEuZ3JlYXRlciIsIkNyaXRlcmlhLmxlc3MiXSwibWFwcGluZ3MiOiI7SUFBQTtRQUFBQTtRQUtBQyxDQUFDQTtRQUpVRCx3QkFBS0EsR0FBWkEsVUFBYUEsS0FBY0EsRUFBRUEsS0FBV0EsSUFBY0UsTUFBTUEsaUJBQWlCQSxDQUFDQSxDQUFBQSxDQUFDQTtRQUN4RUYsMkJBQVFBLEdBQWZBLFVBQWdCQSxLQUFjQSxFQUFFQSxLQUFXQSxJQUFjRyxNQUFNQSxpQkFBaUJBLENBQUNBLENBQUFBLENBQUNBO1FBQzNFSCwwQkFBT0EsR0FBZEEsVUFBZUEsS0FBY0EsRUFBRUEsS0FBV0EsSUFBY0ksTUFBTUEsaUJBQWlCQSxDQUFDQSxDQUFBQSxDQUFDQTtRQUMxRUosdUJBQUlBLEdBQVhBLFVBQVlBLEtBQWNBLEVBQUVBLEtBQVdBLElBQWNLLE1BQU1BLGlCQUFpQkEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7UUFDbEZMLGVBQUNBO0lBQURBLENBTEEsQUFLQ0EsSUFBQTtJQUxELDBCQUtDLENBQUEiLCJmaWxlIjoiQ3JpdGVyaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDcml0ZXJpYSB7XG4gICAgcHVibGljIGVxdWFsKGZpZWxkIDogU3RyaW5nLCB2YWx1ZSA6IGFueSkgOiBDcml0ZXJpYSB7dGhyb3cgXCJOb3QgaW1wbGVtZW50ZWRcIjt9XG4gICAgcHVibGljIG5vdEVxdWFsKGZpZWxkIDogU3RyaW5nLCB2YWx1ZSA6IGFueSkgOiBDcml0ZXJpYSB7dGhyb3cgXCJOb3QgaW1wbGVtZW50ZWRcIjt9XG4gICAgcHVibGljIGdyZWF0ZXIoZmllbGQgOiBTdHJpbmcsIHZhbHVlIDogYW55KSA6IENyaXRlcmlhIHt0aHJvdyBcIk5vdCBpbXBsZW1lbnRlZFwiO31cbiAgICBwdWJsaWMgbGVzcyhmaWVsZCA6IFN0cmluZywgdmFsdWUgOiBhbnkpIDogQ3JpdGVyaWEge3Rocm93IFwiTm90IGltcGxlbWVudGVkXCI7fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==