<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\EquipmentController;
use App\Http\Controllers\FactoryController;
use App\Http\Controllers\ParticipantController;
use App\Http\Controllers\RentalController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\ThreeController;
use App\Http\Controllers\UploadController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// User routes
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/users', [UserController::class, 'store']);
Route::post('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

//Blogs Routes

Route::prefix('blogs')->middleware('throttle:1000,1')->group(function () {

    Route::get('/', [BlogController::class, 'getBlogs']);
    Route::post('/',[BlogController::class,'insertBlog']);
    Route::post('/solution',[BlogController::class,'insertSolution']);
    Route::get('/checkbox', [BlogController::class, 'getBlogsWithCheckbox']);
    Route::get('/type', [BlogController::class, 'getBlogByType']);
    Route::get('/{id}', [BlogController::class, 'getBlogByID']);
    Route::delete('/{id}', [BlogController::class, 'deleteBlog']);
    Route::post('/{id}', [BlogController::class, 'updateBlog']);
});


// Sites Routes
Route::prefix('sites')->middleware('throttle:1000,1')->group(function () {
    Route::get('/', [SiteController::class, 'index']);
    Route::post('/',[SiteController::class,'store']);
    Route::get('/six', [SiteController::class, 'getSixSites']);
    Route::get('/{id}', [SiteController::class, 'show']);
    Route::delete('/{id}', [SiteController::class, 'destroy']);
    Route::post('/{id}', [SiteController::class, 'update']);
});


// Equipments Routes
Route::prefix('equipments')->middleware('throttle:1000,1')->group(function () {
    Route::get('/', [EquipmentController::class, 'getEquipments']);
    Route::post('/',[EquipmentController::class,'insertEquipment']);
    Route::get('/type', [EquipmentController::class, 'getEquipmentsByType']);
    Route::get('/{id}', [EquipmentController::class, 'getEquipmentByID']);
    Route::delete('/{id}', [EquipmentController::class, 'deleteEquipment']);
    Route::post('/{id}', [EquipmentController::class, 'updateEquipment']);
});


// Reviews Routes
Route::prefix('reviews')->middleware('throttle:1000,1')->group(function () {
    Route::get('/', [ReviewController::class, 'getReviews']);
    Route::post('/',[ReviewController::class,'createReview']);
    Route::get('/reviewsBytype', [ReviewController::class, 'getReviewsBytype']);
    Route::get('/{id}', [ReviewController::class, 'getReviewByID']);
    Route::delete('/{id}', [ReviewController::class, 'deleteReview']);
    Route::post('/{id}', [ReviewController::class, 'updateReview']);
});


// Factories Routes
Route::prefix('factorys')->middleware('throttle:1000,1')->group(function () {
    Route::get('/', [FactoryController::class, 'index']);
    Route::get('/top', [FactoryController::class, 'top']);
    Route::get('/{id}', [FactoryController::class, 'show']);
    Route::post('/',[FactoryController::class,'store']);
    Route::post('/{id}', [FactoryController::class, 'update']);
    Route::delete('/{id}', [FactoryController::class, 'destroy']);
});


// Threes Routes
Route::prefix('threes')->middleware('throttle:1000,1')->group(function () {
    Route::get('/', [ThreeController::class, 'index']);
    Route::get('/{id}', [ThreeController::class, 'show']);
    Route::post('/',[ThreeController::class,'store']);
    Route::post('/{id}', [ThreeController::class, 'update']);
    Route::delete('/{id}', [ThreeController::class, 'destroy']);
});


// Participant Routes
Route::prefix('participant')->middleware('throttle:1000,1')->group(function () {
    Route::get('/', [ParticipantController::class, 'index']);
    Route::get('/showparticipant', [ParticipantController::class, 'indexNum']);
    Route::get('/{id}', [ParticipantController::class, 'show']);
    Route::post('/',[ParticipantController::class,'store']);
    Route::post('/{id}', [ParticipantController::class, 'update']);
    Route::delete('/{id}', [ParticipantController::class, 'destroy']);
});


// Rental Routes
Route::prefix('rental')->middleware('throttle:1000,1')->group(function () {
    Route::get('/', [RentalController::class, 'index']);
    Route::get('/{id}', [RentalController::class, 'show']);
    Route::post('/',[RentalController::class,'store']);
});


// Team Routes
Route::prefix('team')->middleware('throttle:1000,1')->group(function () {
    Route::get('/', [TeamController::class, 'getTeam']);
    Route::post('/', [TeamController::class, 'createOrUpdateTeam']);
});
