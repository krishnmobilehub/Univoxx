

#import "CnnViewController.h"

@interface CnnViewController ()
@end

@implementation CnnViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  NSURL *nsurl=[NSURL URLWithString:@"https://edition.cnn.com/"];
  NSURLRequest *nsrequest=[NSURLRequest requestWithURL:nsurl];
  [_webView loadRequest:nsrequest];
}


@end
