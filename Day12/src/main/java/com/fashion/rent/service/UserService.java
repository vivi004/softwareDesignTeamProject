package com.fashion.rent.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fashion.rent.model.Product;
import com.fashion.rent.model.Users;
import com.fashion.rent.repo.ProductRepo;
import com.fashion.rent.repo.UsersRepo;


@Service
public class UserService {
    
    @Autowired
    private UsersRepo urepo;

    @Autowired
    private ProductRepo prepo;

    public Users addUsers(Users user){
         return urepo.save(user);
    }
    public String deleteUser(Long uid){
        urepo.deleteById(uid);
        return "User Deleted Successfully" + uid;
    }
    public List<Users> getUsers(){
        return urepo.findAll();
    }
    public Users findUserByEmail(String email) {
        return urepo.findByEmail(email);
    }
    
    
    // <--------------------------->
    
    public List<Product> getproduct(){
        return prepo.findAll();
    }
    public Product addproducts(Product product){
        return prepo.save(product);
    }
    public String deleteproduct(Long id){
        prepo.deleteById(id);
        return "User Deleted Successfully" + id;
    }
}
