// swift-tools-version:5.7
import PackageDescription

let package = Package(
    name: "Zacharycaine",
    platforms: [
        .macOS(.v10_15)
    ],
    products: [
        .executable(name: "App", targets: ["App"]),
    ],
    dependencies: [
        .package(url: "https://github.com/swifweb/web", from: "1.0.0-beta.2.0.0")
    ],
    targets: [
        .executableTarget(name: "App", dependencies: [
            .product(name: "Web", package: "web")
        ]),
        .testTarget(name: "AppTests", dependencies: ["App"])
    ]
)