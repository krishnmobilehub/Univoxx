

#import "GoogleViewController.h"

@interface GoogleViewController ()

@end

@implementation GoogleViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  
  NSURL *nsurl=[NSURL URLWithString:@"https://www.google.com/"];
  NSURLRequest *nsrequest=[NSURLRequest requestWithURL:nsurl];
  [_webView loadRequest:nsrequest];
  
}



@end
