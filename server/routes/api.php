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
use App\Http\Controllers\ContactController;
use App\Http\Controllers\AdminAuthController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('admin')->group(function () {
    Route::post('/login', [AdminAuthController::class, 'login']);
    Route::post('/register', [AdminAuthController::class, 'register']);
    Route::post('/logout', [AdminAuthController::class, 'logout'])->middleware('auth:sanctum');
});

// User routes
// Route::get('/users', [UserController::class, 'index']);
// Route::get('/users/{id}', [UserController::class, 'show']);
// Route::post('/users', [UserController::class, 'store']);
// Route::post('/users/{id}', [UserController::class, 'update']);
// Route::delete('/users/{id}', [UserController::class, 'destroy']);

//Blogs Routes
Route::prefix('blogs')->middleware('throttle:2000,1')->group(function () {
    Route::get('/', [BlogController::class, 'getBlogs']);
    Route::get('/checkbox', [BlogController::class, 'getBlogsWithCheckbox']);
    Route::get('/type', [BlogController::class, 'getBlogByType']);
    Route::get('/{id}', [BlogController::class, 'getBlogByID']);
});
Route::prefix('blogs')->middleware(['auth:sanctum', 'admin','throttle:2000,1'])->group(function () {
    Route::post('/',[BlogController::class,'insertBlog']);
    Route::post('/solution',[BlogController::class,'insertSolution']);
    Route::delete('/{id}', [BlogController::class, 'deleteBlog']);
    Route::post('/{id}', [BlogController::class, 'updateBlog']);
});

// Sites Routes
Route::prefix('sites')->middleware('throttle:2000,1')->group(function () {
    Route::get('/', [SiteController::class, 'index']);
    Route::get('/six', [SiteController::class, 'getSixSites']);
    Route::get('/{id}', [SiteController::class, 'show']);
});
Route::prefix('sites')->middleware(['auth:sanctum', 'admin','throttle:2000,1'])->group(function () {
    Route::post('/',[SiteController::class,'store']);
    Route::delete('/{id}', [SiteController::class, 'destroy']);
    Route::post('/{id}', [SiteController::class, 'update']);
});


// Equipments Routes
Route::prefix('equipments')->middleware('throttle:2000,1')->group(function () {
    Route::get('/', [EquipmentController::class, 'getEquipments']);
    Route::get('/type', [EquipmentController::class, 'getEquipmentsByType']);
    Route::get('/{id}', [EquipmentController::class, 'getEquipmentByID']);
});
Route::prefix('equipments')->middleware(['auth:sanctum', 'admin','throttle:2000,1'])->group(function () {
    Route::post('/',[EquipmentController::class,'insertEquipment']);
    Route::delete('/{id}', [EquipmentController::class, 'deleteEquipment']);
    Route::post('/{id}', [EquipmentController::class, 'updateEquipment']);
});


// Reviews Routes
Route::prefix('reviews')->middleware(['auth:sanctum', 'admin','throttle:2000,1'])->group(function () {
    Route::get('/', [ReviewController::class, 'getReviews']);
    Route::get('/reviewsBytype', [ReviewController::class, 'getReviewsBytype']);
    Route::get('/{id}', [ReviewController::class, 'getReviewByID']);
});
Route::prefix('reviews')->middleware('throttle:2000,1')->group(function () {
    Route::post('/',[ReviewController::class,'createReview']);
    Route::delete('/{id}', [ReviewController::class, 'deleteReview']);
    Route::post('/{id}', [ReviewController::class, 'updateReview']);
});


// Factories Routes
Route::prefix('factorys')->middleware('throttle:2000,1')->group(function () {
    Route::get('/', [FactoryController::class, 'index']);
    Route::get('/top', [FactoryController::class, 'top']);
    Route::get('/{id}', [FactoryController::class, 'show']);
});
Route::prefix('factorys')->middleware(['auth:sanctum', 'admin','throttle:2000,1'])->group(function () {
    Route::post('/',[FactoryController::class,'store']);
    Route::post('/{id}', [FactoryController::class, 'update']);
    Route::delete('/{id}', [FactoryController::class, 'destroy']);
});


// Threes Routes
Route::prefix('threes')->middleware('throttle:2000,1')->group(function () {
    Route::get('/', [ThreeController::class, 'index']);
    Route::get('/{id}', [ThreeController::class, 'show']);
});
Route::prefix('threes')->middleware(['auth:sanctum', 'admin','throttle:2000,1'])->group(function () {
    Route::post('/',[ThreeController::class,'store']);
    Route::post('/{id}', [ThreeController::class, 'update']);
    Route::delete('/{id}', [ThreeController::class, 'destroy']);
});


// Participant Routes
Route::prefix('participant')->middleware('throttle:2000,1')->group(function () {
    Route::get('/', [ParticipantController::class, 'index']);
    Route::get('/showparticipant', [ParticipantController::class, 'indexNum']);
    Route::get('/{id}', [ParticipantController::class, 'show']);
});
Route::prefix('participant')->middleware(['auth:sanctum', 'admin','throttle:2000,1'])->group(function () {
    Route::post('/',[ParticipantController::class,'store']);
    Route::post('/{id}', [ParticipantController::class, 'update']);
    Route::delete('/{id}', [ParticipantController::class, 'destroy']);
});


// Rental Routes
Route::prefix('rental')->middleware('throttle:2000,1')->group(function () {
    Route::get('/', [RentalController::class, 'index']);
    Route::get('/{id}', [RentalController::class, 'show']);
});
Route::prefix('rental')->middleware(['auth:sanctum', 'admin','throttle:2000,1'])->group(function () {
    Route::post('/',[RentalController::class,'store']);
});


// Team Routes
Route::prefix('team')->middleware('throttle:2000,1')->group(function () {
    Route::get('/', [TeamController::class, 'getTeam']);
});
Route::prefix('team')->middleware(['auth:sanctum', 'admin','throttle:2000,1'])->group(function () {
    Route::post('/', [TeamController::class, 'createOrUpdateTeam']);
});

// Send Email
Route::prefix('sendEmail')->middleware('throttle:2000,1')->group(function () {
    Route::post('/', [ContactController::class, 'sendEmail']);
});