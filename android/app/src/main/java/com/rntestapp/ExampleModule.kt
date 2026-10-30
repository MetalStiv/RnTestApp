package com.rntestapp
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class ExampleModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "ExampleModule"
    }

    @ReactMethod
    fun doJob(promise: Promise) {
        promise.resolve("Job is done!")
    }
}
