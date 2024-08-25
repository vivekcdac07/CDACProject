package com.app.serviceImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.AdminDao;
import com.app.pojos.Admin;
import com.app.services.AdminService;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired AdminDao dao;

	@Override
	public Admin validate(String userid, String pwd) {
		
		Optional<Admin> admin=dao.findById(userid);
		if(admin.isPresent() && admin.get().getPwd().equals(pwd)) {
			return admin.get();
		}
		return null;
	}

	@Override
	public void updateAdmin(Admin admin) {
		if(admin.getPwd().equals("") || admin.getPwd()==null) {
			admin.setPwd(dao.getById(admin.getUserid()).getPwd());
		}
		dao.save(admin);		
	}

}
