"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var favorite_service_1 = require("../services/favorite.service");
var FavoritesListComponent = (function () {
    function FavoritesListComponent(_favoriteService) {
        this._favoriteService = _favoriteService;
        this.title = 'Markers List:';
        this.loading = true;
    }
    FavoritesListComponent.prototype.ngOnInit = function () {
        console.log('FavoritesListComponent loaded!!');
        this.getFavorites();
    };
    FavoritesListComponent.prototype.getFavorites = function () {
        var _this = this;
        this._favoriteService.getFavorites().subscribe(function (result) {
            console.log(result);
            _this.favorites = result.favorites;
            if (!_this.favorites) {
                alert('Server Error');
            }
            else {
                _this.loading = false;
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('Request Error!');
            }
        });
    };
    FavoritesListComponent.prototype.onDeleteConfirm = function (id) {
        this.confirm = id;
    };
    FavoritesListComponent.prototype.onCancelConfirm = function (id) {
        this.confirm = null;
    };
    FavoritesListComponent.prototype.onDeleteFavorite = function (id) {
        var _this = this;
        this._favoriteService.deleteFavorite(id).subscribe(function (result) {
            if (!result.message) {
                alert('Request Error');
            }
            _this.getFavorites();
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('Request Error!');
            }
        });
    };
    FavoritesListComponent = __decorate([
        core_1.Component({
            selector: 'favorites-list',
            templateUrl: 'app/views/favorites-list.html',
            providers: [favorite_service_1.FavoriteService]
        }),
        __metadata("design:paramtypes", [favorite_service_1.FavoriteService])
    ], FavoritesListComponent);
    return FavoritesListComponent;
}());
exports.FavoritesListComponent = FavoritesListComponent;
//# sourceMappingURL=favorites-list.component.js.map