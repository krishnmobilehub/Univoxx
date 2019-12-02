
#import "UnixBridge.h"

#import <UIKit/UIKit.h>
#import <AVFoundation/AVFoundation.h>
#import <React/RCTEventEmitter.h>
#import "GoogleViewController.h"
#import "CnnViewController.h"
#import "AppDelegate.h"

@implementation UnixBridge

RCT_EXPORT_MODULE();
- (NSArray<NSString *> *)supportedEvents {
  return @[];
}

RCT_EXPORT_METHOD(onInitView) {
  
  [self onGoogleView];
  
}
RCT_EXPORT_METHOD(onInitCnnView) {
  
  [self onCnnView];
  
}
- (void)onGoogleView {
  dispatch_async(dispatch_get_main_queue(), ^{
    GoogleViewController *ctrlObj =[[GoogleViewController alloc] initWithNibName:@"GoogleViewController" bundle:nil];
    UINavigationController* contactNavigator = [[UINavigationController alloc] initWithRootViewController:ctrlObj];
    AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    [((UINavigationController*)delegate.window.rootViewController)  presentViewController:contactNavigator animated:NO completion:nil];
  });
}
- (void)onCnnView {
  dispatch_async(dispatch_get_main_queue(), ^{
    CnnViewController *ctrlObj =[[CnnViewController alloc] initWithNibName:@"CnnViewController" bundle:nil];
    UINavigationController* contactNavigator = [[UINavigationController alloc] initWithRootViewController:ctrlObj];
    AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    [((UINavigationController*)delegate.window.rootViewController)  presentViewController:contactNavigator animated:NO completion:nil];
  });
}
@end

