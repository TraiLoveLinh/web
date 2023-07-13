function sum(arr, n){
  if (n == 0){
    return 0;
  }
  if (n <= 1){
    return arr[n - 1];
  }
  return arr[n - 1] + sum(arr, n - 1);
}
